//// GAMES HUB ////

var users = false;
var currentUserID = null;
var selectedAvatar = "";
var currentlyPlayingUserID = null;

var deletedUsers = [null, null, null, null];
var totalDeletedUsers = -1;

var totalUserCount = 0;

var avatar = ["assets/nouser.png", "assets/nouser.png", "assets/nouser.png", "assets/nouser.png"];
var XP = [0, 0, 0, 0];
var username = ["", "", "", ""];

var scrollValue = 1500;

function toggleUsers()
{
    playMainClick();

    const setting = document.getElementById("usersToggle");
    if (setting.checked)
    {
        currentUserID = -1;
        document.getElementById("addUserCard").style.display = "grid";
        document.getElementById("appendChildDiv").style.display = "block";
        users = true;
        document.getElementById("addUserInfoText").innerHTML = "(" + totalUserCount + "/4)";
    }
    else
    {
        users = false;
        currentUserID = null;
        document.getElementById("addUserCard").style.display = "none";
        document.getElementById("appendChildDiv").style.display = "none";
        document.getElementById("userSelection").style.display = "none";
        deletedUsers = [null, null, null, null];

        for (let i = 0; i < 4; i++) 
        {
            deleteUser(i, true);
        }
        scrollValue = 1500;
        totalUserCount = 0;
    }
    saveSettings();
}

function openUserDialog()
{
    console.log("currentUSERID: " + currentUserID)
    playMainClick();

    if (totalUserCount === 4)
    {
        alert(getLocalizedString("maxUserAlert"));
        return;
    }

    for (let i = 1; i <= 8; i++) {
        document.getElementById("avatar" + i).style.backgroundImage = "url('assets/user" + i + ".png')";
        document.getElementById("avatar" + i).style.borderColor = "white";
    }
    selectedAvatar = "assets/nouser.png"; // Reset avatar selection ogni volta che si apre la dialog

    document.getElementById("box").style.display = "grid";
    window.scrollTo
    ({
        top: scrollValue,
        left: 0,
        behavior: "smooth",
    });
}

function closeUserDialog()
{
    playMainClick();
    document.getElementById("box").style.display = "none";
    document.getElementById("newUserName").value = "";
    selectedAvatar = "";
}

function selectAvatar(avatarId)
{
    playMainClick();

    for (let i = 1; i <= 8; i++) 
    {
        document.getElementById("avatar" + i).style.borderColor = "white";
    }

    document.getElementById("avatar" + avatarId).style.borderColor = "yellow"; // Highlight selected avatar

    selectedAvatar = 'assets/user' + avatarId + '.png'; // STORE selected avatar
}

function addUser() 
{
    const userName = document.getElementById("newUserName").value;
    if (userName === "") 
    {
        alert(getLocalizedString("invalidUsernameAlert"));
        return;
    }

    currentUserID++;

    // USER CARD ATTRIBUTES
    document.getElementById("user" + currentUserID).style.display = "grid";
    document.getElementById("userName" + currentUserID).innerText = userName;
    document.getElementById("userXP" + currentUserID).innerText = "XP: " + XP[currentUserID];

    if (!selectedAvatar || selectedAvatar === "assets/nouser.png") 
    {
        avatar[currentUserID] = "assets/nouser.png";
    }
    else 
    {
        avatar[currentUserID] = selectedAvatar;
    }

    document.getElementById("userPic" + currentUserID).src = avatar[currentUserID];
    totalUserCount += 1;

    username[currentUserID] = userName; // STORE new username

    console.log("ADDED USER " + currentUserID);
    console.log("username " + username[currentUserID] + " pic: " + avatar[currentUserID])
    document.getElementById("addUserInfoText").innerHTML = "(" + totalUserCount + "/4)";

    closeUserDialog();
    scrollValue += 100;
}

function deleteUser(id, triggerSound) 
{
    if(!triggerSound)
    {
        playMainClick();
    }

    username[id] = "";
    avatar[id] = "assets/nouser.png";
    XP[id] = 0;

    document.getElementById("user" + id).style.display = "none";
    document.getElementById("userName" + id).innerText = "";
    document.getElementById("userXP" + id).innerText = "";
    document.getElementById("currentUserName").innerText = "";
    document.getElementById("currentUserXP").innerText = "";
    document.getElementById("userCardName" + id).innerText = "";
    document.getElementById("userCardXP" + id).innerText = "";

    currentUserID--;
    totalUserCount--;

    totalDeletedUsers += 1;
    scrollValue -= 100;
    document.getElementById("addUserInfoText").innerHTML = "(" + totalUserCount + "/4)";

    deletedUsers[totalDeletedUsers] = id;
}

function debug()
{
    for (let i = 0; i < 4; i++) 
    {
        console.log("User " + i + ": " + username[i] + ", Avatar: " + avatar[i] + ", XP: " + XP[i]);
    }
    console.log("totalusercount: " + totalUserCount)
    console.log("deletedUsers: " + deletedUsers)
}

var userSelectionGame;

function showUserSelection(gameID)
{
    document.getElementById("userSelection").style.display = "block";

    if(totalUserCount === 3)
    {
        document.getElementById("userSelection2").style.display = "block";
    }

    if(totalUserCount === 4)
    {
        document.getElementById("userSelection2").style.display = "block";
        document.getElementById("userSelection3").style.display = "block";
    }

    for(let i = 0; i < 4; i++)
    {
        document.getElementById("userCardPic" + i).src = avatar[i];
        document.getElementById("userCardName" + i).innerHTML = username[i];
        document.getElementById("userCardXP" + i).innerHTML = "XP: " + XP[i];
    }

    userSelectionGame = gameID;
}

function selectUser(id, triggerSound)
{
    if(triggerSound)
    {
        playMainClick();
    }

    currentlyPlayingUserID = id;
    document.getElementById("userSelection").style.display = "none";

    if(userSelectionGame === 3)
    {
        loadMemoryGame();
    }
    else
    {
        loadQuiz(true);
    }

    document.getElementById("currentUserPic").src = avatar[id];
    document.getElementById("currentUserName").innerHTML = username[id];
    document.getElementById("currentUserXP").innerHTML = "XP: " + XP[id];
}

function displayCurrentUser()
{
    if(totalUserCount > 0)
    {
        document.getElementById("currentUserDiv").style.display = "flex";
    }
    else
    {
        document.getElementById("currentUserDiv").style.display = "none";
    }
}

function updateXP(userID)
{
    document.getElementById("currentUserXP").innerHTML = "XP: " + XP[userID];
    document.getElementById("userCardXP" + userID).innerHTML = "XP: " + XP[userID];
    document.getElementById("userXP" + userID).innerHTML = "XP: " + XP[userID];
}
//// GAMES HUB ////

function saveSettings() 
{
    const settings = 
    {
        soundtrackVolume: document.getElementById('sliderVolume').value,
        effectsVolume: document.getElementById('sliderEffects').value,
        effectsEnabled: document.getElementById('effectsToggle').checked,
        soundtrackEnabled: document.getElementById('soundtrackToggle').checked,
        darkTheme: document.getElementById('themeToggle').checked,
        language: document.getElementById('italianButton').classList.contains('selected') ? 'it' : 'en',
        memoryImages: document.getElementById('memoryImages').value,
        memoryDifficulty: document.getElementById('memoryDifficulty').value,
        quizDifficulty: document.getElementById('quizDifficulty').value,
        users: document.getElementById('usersToggle').checked 
    };

    localStorage.setItem('gamesHubSettings', JSON.stringify(settings));
}

function loadSettings() 
{
    const settings = JSON.parse(localStorage.getItem('gamesHubSettings'));
    if (!settings) return;

    document.getElementById('memoryImages').value = settings.memoryImages || 'flags';
    document.getElementById('memoryDifficulty').value = settings.memoryDifficulty || '24';
    document.getElementById('quizDifficulty').value = settings.quizDifficulty || '2';
    document.getElementById('sliderVolume').value = settings.soundtrackVolume;
    document.getElementById('sliderEffects').value = settings.effectsVolume;
    document.getElementById('effectsToggle').checked = settings.effectsEnabled;
    document.getElementById('soundtrackToggle').checked = settings.soundtrackEnabled;
    document.getElementById('themeToggle').checked = settings.darkTheme;
    document.getElementById('usersToggle').checked = settings.users;

    setMemoryImages();
    setMemoryDifficulty();
    setQuizDifficulty();
    toggleTheme();
    toggleEffects();
    toggleSoundtrack();
    setSoundtrackVolume();
    setEffectsVolume();
    toggleUsers();
    updateSliderFill(document.getElementById('sliderVolume'));
    updateSliderFill(document.getElementById('sliderEffects'));
    setLanguage(settings.language, false);
}

function updateSliderFill(slider) 
{
    const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(90deg,rgb(128, 128, 255) ${value}%, rgb(43, 43, 121) ${value}%)`;
}

function setBackground(type) 
{
    if (!body) return;
    const validTypes = ['default-bg', 'dark-bg', 'win-bg', 'defeat-bg'];
    if (!validTypes.includes(type)) return;
    if (body.classList.contains(type)) return;
    body.classList.remove(...validTypes);
    body.classList.add(type);
}

function setDefaultBackground() 
{ 
    switch(theme)
    {
        case "light":
            setBackground('default-bg');
            break;
        case "dark":
            setBackground('dark-bg');
            break;
        default:
            setBackground('default-bg'); 
    }
}

function setWinBackground() { setBackground('win-bg'); }
function setDefeatBackground() { setBackground('defeat-bg'); }

function toggleTheme()
{
    playMainClick();

    const setting = document.getElementById("themeToggle");
    if (setting.checked)
    {
        theme = "dark";
    }
    else
    {
        theme = "light";
    }
    
    setDefaultBackground();
    saveSettings();
}
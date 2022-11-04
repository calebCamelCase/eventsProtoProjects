// Name, Weapon type, Vision, Nation, Release Date

class GenshinCharacter{
    constructor() {
        this.character ={
            name: '',
            weapon: '',
            vision: '',
            nation: '',
            releaseDate: '',
            image: ''
        }
    }

    button() {
        let button = document.getElementById('submitBtn');
        button.addEventListener('click', this.displayData)
    }

    displayData(e) {
        e.preventDefault();
        let inputName = document.getElementById('giCharacter').value
        let inputWeapon = document.getElementById('giWeapon').value
        let inputVision = document.getElementById('giVision').value
        let inputNation = document.getElementById('giNation').value
        let inputDate = document.getElementById('releaseDate').value
        let inputImage = document.getElementById('giImage').value

        this.character = {
            name: inputName,
            weapon: inputWeapon,
            vision: inputVision,
            nation: inputNation,
            releaseDate: inputDate,
            image: inputImage
        }

        let cardDisplay = document.getElementById('cardDisplay');
        cardDisplay.innerHTML +=`
        <div class="card mb-3 genshin-card">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${this.character.image}" class="img-fluid" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${this.character.name}</h5>
                <p class="card-text">Weapon: ${this.character.weapon}</p>
                <p class="card-text">Vision: ${this.character.vision}</p>
                <p class="card-text">Nation: ${this.character.nation}</p>
                <p class="card-text"><small class="text-muted">Released in: ${this.character.releaseDate}</small></p>
            </div>
            </div>
        </div>
    </div>

        `
    }
}

let action = new GenshinCharacter();
action.button();
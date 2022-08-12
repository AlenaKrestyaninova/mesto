class Api {
    constructor({host, headers}){
        this._host = host;
        this._headers = headers;
        //this._getJsonOrError = this._getJsonOrError.bind(this);
    }

    /* Вернуть результат или ошибку*/
    _getJsonOrError(res){
        if (res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    /* Получить изначальные карточки с сервера*/
    getCards(){
        return fetch(`${this._host}/cards`, {
            headers: this._headers,
        })
        .then(this._getJsonOrError)
    }

    /* Создать новую карточку*/
    createCard(cardObj){
        return fetch(`${this._host}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardObj.name,
                link: cardObj.link,
            })
        })
        .then(this._getJsonOrError)
    }

    /* Удалить карточку на сервере*/
    deleteCard(_id){
        return fetch(`${this._host}/cards/${_id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._getJsonOrError)
    }

    /* Лайкнуть карточку на сервере*/
    likeCard(_id){
        return fetch(`${this._host}/cards/${_id}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(this._getJsonOrError)
    }

    /* Удалить лайк на сервере*/
    dislikeCard(_id) {
        return fetch(`${this._host}/cards/${_id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        }).then(this._getJsonOrError);
    }

    /* Запросить данные о юзере*/
    getUserInfo(){
        return fetch(`${this._host}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(this._getJsonOrError)
    }

    /* Запостить данные о юзере*/
    setUserInfo(data){
        return fetch(`${this._host}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        })
        .then(this._getJsonOrError)
    }

    /* Запостить аватар*/
    setAvatar(avatar){
        return fetch(`${this._host}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar)
        })
        
        .then(this._getJsonOrError)
    }

}

export default Api;
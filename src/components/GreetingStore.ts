import {makeAutoObservable} from "mobx"

class GreetingStore {
    store = {
        show: false,
        user: {
            firstName: '',
            lastName: ''
        },
        error: false
    }

    constructor() {
        makeAutoObservable(this)
    }

    showModalWindow = () => {
        // относится к баттону
        (!this.store.user.firstName || !this.store.user.lastName)
            ? this.store.error = true :
            this.store.show = (!this.store.show)
        // if (!this.store.show) {
        //     this.store.user.firstName = ''
        //     this.store.user.lastName = ''
        // }
    }
    handlefirstNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.store.error = false
        this.store.user.firstName = e.target.value
    };
    handlelastNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.store.error = false
        this.store.user.lastName = e.target.value
    }
}

export default new GreetingStore()
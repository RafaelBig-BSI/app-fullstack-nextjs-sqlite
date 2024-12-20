export class Id {
    static get newId(): string {
        return Math.random().toString(36).substring(2, 15).toUpperCase()
    }
}
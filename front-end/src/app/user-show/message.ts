export class Message {
    constructor(
        public reciever: string = '',
        public sender: string = '',
        public context: string = '',
    ){}
}
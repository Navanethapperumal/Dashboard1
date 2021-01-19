// export class ConfigurationModel {
//     constructor(
//         public config1: string,
//         public config2: number,
//         public config3: Date,
//         public config4: boolean
//     ) {}
// }

export class ConfigurationModel {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ) {}
}
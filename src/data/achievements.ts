export interface Achievement {
    title: string;
    link?: string;
    tag: string;
}
export const achievements:Achievement[] = [
    { title: 'Microsoft Azure AZ-900' , tag:'(Microsoft)', link: 'https://www.credly.com/badges/b7503a95-340f-4f29-aa54-8507a9dc2893/public_url' },
    { title: 'Winner at Mumbai Hackathon (2022)',tag:'(Zerodha/Frappe)', link: 'https://drive.google.com/file/d/1wYjYekEjt5pbo1rk1Y31IgoRiJemduhL/view' },
    { title: 'Smart Home Automation System',tag:'(HBRP Publications)', link: 'https://zenodo.org/records/4836260' },
    { title: 'Attendance System using RFID Technology',tag:'(HBRP Publications)', link: 'https://doi.org/10.5281/zenodo.6476808' }
];
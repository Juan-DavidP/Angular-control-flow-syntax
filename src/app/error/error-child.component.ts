import { Component } from "@angular/core";

@Component({
    selector: 'app-error-child',
    standalone: true,
    imports: [],
    template: '<p>hola</p>',
    styleUrl: './error.component.scss'
})
export class ErrorComponentChild {
    constructor() {
        throw new Error("Simulated load error");
    }

}
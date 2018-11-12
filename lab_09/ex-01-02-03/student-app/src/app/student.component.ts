@Component({
    selector: 'app-students',
    template: `<h2>{{ getTitle() }}<br><br>
                    Current Time: {{ getCurrentDate() }}</h2>`
})

export class StudentComponent {
    title = 'My List of Students';
    getTitle() {
        return this.title;
    }

    getCurrentDate() {
        return new Date();
    }
}

import { Component } from '@angular/core';

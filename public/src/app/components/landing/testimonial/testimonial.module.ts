// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { TestimonialComponent } from './testimonial.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TestimonialComponent,
    ],
    exports: [
        TestimonialComponent,
    ]
})
export class TestimonialModule {

}

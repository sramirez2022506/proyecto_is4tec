import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { WhiteSpaceDirective } from './white-space.directive';


@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [WhiteSpaceDirective],
    exports: [ReactiveFormsModule, WhiteSpaceDirective]
})

export default class SharedModule { };
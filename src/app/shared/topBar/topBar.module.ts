import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TopBarComponent } from "src/app/shared/topBar/components/topBar.component";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopBarComponent],
    exports: [TopBarComponent]
})
export class TopBarModule {}
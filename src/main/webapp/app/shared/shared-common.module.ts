import { NgModule } from '@angular/core';

import { JhipsterSbseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterSbseSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterSbseSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSbseSharedCommonModule {}

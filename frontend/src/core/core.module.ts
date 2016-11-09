import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SocketService } from './socket.service';

@NgModule( {
  imports     : [],
  exports     : [],
  declarations: [],
  providers   : [ SocketService ],
} )
export class CoreModule {

  constructor ( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      throw new Error( 'CoreModule is already loaded. Import it in the AppModule only' );
    }
  }

}

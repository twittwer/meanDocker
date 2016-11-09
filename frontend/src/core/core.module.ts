import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SocketService } from './socket.service';
import { UserService } from './user.service';

@NgModule( {
  imports     : [],
  exports     : [],
  declarations: [],
  providers   : [ SocketService, UserService ],
} )
export class CoreModule {

  constructor ( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if ( parentModule ) {
      throw new Error( 'CoreModule is already loaded. Import it in the AppModule only' );
    }
  }

}

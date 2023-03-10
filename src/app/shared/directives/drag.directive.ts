import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive( {
  selector: '[imgDrag]'
} )

export class DragDirective {

  @Output() file: EventEmitter<any> = new EventEmitter();

  @HostBinding( "style.background" ) private background = "#eee";

  constructor() {}

  @HostListener( "dragover", [ "$event" ] )
  public onDragOver( event: DragEvent ): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#1E1E1E !important";
  }

  @HostListener( "dragleave", [ "$event" ] )
  public onDragLeave( event: DragEvent ): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = "transparent !important";
  }

  @HostListener( "drop", [ "$event" ] )
  public onDrop( event: DragEvent ): void {
    event.preventDefault();
    event.stopPropagation();
    this.background = "#eee";

    const reader = new FileReader();

    if ( event.dataTransfer?.files && event.dataTransfer?.files.length ) {
      const file = event.dataTransfer?.files[0];
      reader.readAsDataURL( file );

      if (
        file.type === "image/jpeg"
        ||
        file.type === "image/png"
        ||
        file.type === "image/jpg"
      ) {
        reader.onload = () => {
          this.file.emit( reader.result );
        }
      } else {
        return;
      }

    }

  }

}

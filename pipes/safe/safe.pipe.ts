import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    console.log('comming url in safe pipe== ', url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

import { Component } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogImageUrl: string ='';
  textValue: string='';

  constructor(private dogsService: DogsService){}

  ngOnInit(): void{
    this.loadRandomDogImg();
  }

  loadRandomDogImg(): void {
    this.dogsService.getRandomDogImage().subscribe(response =>{
      this.dogImageUrl = response.message;
    });
  }

  onTextChange(event: any): void {
    this.textValue = event.target.value;
  }
}

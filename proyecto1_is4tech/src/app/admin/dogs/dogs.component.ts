import { Component } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogImageUrl: string ='';
  textInput: string='';

  constructor(private dogsService: DogsService){}

  ngOnInit(): void{
    this.getNewDogImg();
  }

  getNewDogImg(): void {
    this.dogsService.getRandomDogImage().subscribe(response =>{
      this.dogImageUrl = response.message;
    });
  }
}

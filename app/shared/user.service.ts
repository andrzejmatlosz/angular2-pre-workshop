import { SharedDataService } from './sharedData.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public userName = 'Steve Kowalski';

  constructor(private sharedDataService: SharedDataService) {}
}
import {AppModule} from './app.module';
import {RouterModule} from "@angular/router";
import {async, TestBed} from "@angular/core/testing";

describe('App Module',()=>{

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports : [RouterModule]
    })
      .compileComponents();
  }));

  it('should create the app module',()=>{
    expect(AppModule).toBeTruthy();
  })
});

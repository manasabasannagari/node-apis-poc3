import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmployeesService } from './services/employees.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        EmployeesService
      ],
      imports : [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Scribe Edge');
  }));

  //it('test',async(()=>{
    // let page = AppComponent.prototype.navigateTo();
    // console.log(page);
  //   let debugElements = fixture.debugElement.queryAll(By.directive(RouterLink));
  //   let button =  fixture.debugElement.query(By.css('a'));
  //   button.triggerEventHandler('click','');
  //   fixture.detectChanges();
  //   let index = debugElements.findIndex(x=>x.properties['href']==='employees');
  //   expect(index).toBeGreaterThan(-1);
  // }));

});

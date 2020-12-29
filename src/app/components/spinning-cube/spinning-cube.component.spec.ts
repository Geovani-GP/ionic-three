import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpinningCubeComponent } from './spinning-cube.component';

describe('SpinningCubeComponent', () => {
  let component: SpinningCubeComponent;
  let fixture: ComponentFixture<SpinningCubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningCubeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpinningCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

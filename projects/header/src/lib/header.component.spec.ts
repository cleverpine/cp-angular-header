import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the side nav when the toggleSideNav function is called', () => {
    const initialIsShowingSideNavValue = component.isShowingSideNav;
    component.toggleSideNav();
    expect(component.isShowingSideNav).toBe(!initialIsShowingSideNavValue);
  });

  it('should emit the toggledSideNav event when the toggleSideNav function is called', () => {
    spyOn(component.toggledSideNav, 'emit');
    component.toggleSideNav();
    expect(component.toggledSideNav.emit).toHaveBeenCalled();
  });

  it('should emit the logout event when the onLogout function is called', () => {
    spyOn(component.logout, 'emit');
    component.onLogout();
    expect(component.logout.emit).toHaveBeenCalled();
  });

  it('should initialize isShowingSideNav to false by default', () => {
    expect(component.isShowingSideNav).toBeFalse();
  });

  it('should emit toggledSideNav event with updated isShowingSideNav value when toggleSideNav function is called', () => {
    spyOn(component.toggledSideNav, 'emit');
    component.toggleSideNav();
    expect(component.toggledSideNav.emit).toHaveBeenCalledWith(component.isShowingSideNav);
  });

  it('should render the profileName and title properties in the template', () => {
    component.profileName = 'John Doe';
    component.title = 'My Page';
    fixture.detectChanges();
    const profileNameElement = fixture.nativeElement.querySelector('.profile-name');
    const titleElement = fixture.nativeElement.querySelector('.title');
    expect(profileNameElement.textContent).toContain('John Doe');
    expect(titleElement.textContent).toContain('My Page');
  });
});

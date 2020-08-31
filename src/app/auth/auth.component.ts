import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConstantsService} from '../../shared/services/constants.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild('dialog') dialogTemp: TemplateRef<any>;
  public passVisibility = false;
  public auth: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.constants.EMAIL_PATTERN)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  public restoreEmail: FormControl = new FormControl(
    '',
    [Validators.required, Validators.pattern(this.constants.EMAIL_PATTERN)]
    );

  constructor(
    public dialog: MatDialog,
    public constants: ConstantsService
  ) { }

  ngOnInit(): void {

  }

  public onSubmit(): void {

    console.log(this.auth.value);
    console.log(this.auth);
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(this.dialogTemp);

    dialogRef.afterClosed().subscribe(() => {
    });
  }

}

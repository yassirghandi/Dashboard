import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComboBoxComponent } from 'src/app/shared/combo-box/combo-box.component';

@Component({
  selector: 'app-backup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './backup.component.html',
  styleUrl: './backup.component.scss'
})
export class BackupComponent {

  windowsPathPattern = /^[a-zA-Z]:\\(?:\w+\\?)*$/;
  unixPathPattern = /^(\/[^/]+)+\/?$/;
  backupCalendarForm!: FormGroup ;
  frequencyOptions!: { label: string; value: string; }[] ;
  dayOfWeekOptions!: { label: string; value: string; }[];
  backupForm!: FormGroup ;
   

  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService

  ) {}

  ngOnInit(): void {
      // Initialize form
      this.backupForm = this.formBuilder.group({
          lienBackupDB: ["", [Validators.required,Validators.pattern(/^[a-zA-Z]:\\(?:[\w\s.-]+\\)*[\w\s.-]+$/)]],
          lienDbDump: ["", [Validators.required,Validators.pattern(/^[a-zA-Z]:\\(?:[\w\s.-]+\\)*[\w\s.-]+$/)]],
          frequency: ['', Validators.required],
          time: ['', Validators.required],
          dayOfWeek: ['SUN'],
          dayOfMonth: ['1'],
          month: ['1'],
          week: ['1'],
          dayOfWeekInMonth: ['SUN'],
          databases: this.formBuilder.array([]),
          retentionDays: ['', [Validators.required, Validators.min(15)]]
      });

  
        this.frequencyOptions = [
          { label: 'Daily', value: 'daily' },
          { label: 'Weekly', value: 'weekly' },
          { label: 'Monthly', value: 'monthly' },
          { label: 'Annually', value: 'annually' }
        ];
    
        // Define options for day of week dropdown
        this.dayOfWeekOptions = [
          { label: 'Sunday', value: 'SUN' },
          { label: 'Monday', value: 'MON' },
          { label: 'Tuesday', value: 'TUE' },
          { label: 'Wednesday', value: 'WED' },
          { label: 'Thursday', value: 'THU' },
          { label: 'Friday', value: 'FRI' },
          { label: 'Saturday', value: 'SAT' }
        ];
  }


  get frequency() {
    return this.backupForm.get('frequency');
  }

  get databasesFormArray() {
    return this.backupForm.get('databases') as FormArray;
  }

 

  onDirectorySelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      console.log("input file ", input.files);
      // Extract the path from the first file entry
      const relativePath = input.files[0].webkitRelativePath;
      const directoryPath = relativePath.substring(0, relativePath.indexOf('/'));

      // Set the form control value
      this.backupForm.controls['lienBackupDB'].setValue(directoryPath);
    }
  }

  selectedFolder: FileList | null = null;

  onFolderSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFolder = input.files;
  }

  addDatabase() {
    this.databasesFormArray.push(this.formBuilder.control('', Validators.required));
  }

  removeDatabase(index: number) {
    this.databasesFormArray.removeAt(index);
  }
  
  saveOrUpdate(): void {
   // console.log("this hf the data z");
    /*if (this.backupForm.valid) {

        const formValues = this.backupForm.value;

        const formData: BackupFormData = {
          frequency: formValues.frequency,
          time: formValues.time,
          dayOfWeek: formValues.dayOfWeek,
          dayOfMonth: formValues.dayOfMonth,
          month: formValues.month,
          week: formValues.week,
          dayOfWeekInMonth: formValues.dayOfWeekInMonth,
          lienBackupDB: formValues.lienBackupDB,
          lienDbDump: formValues.lienDbDump,
          cronExpression: '',
          databases: formValues.databases,
          retentionDays: formValues.retentionDays,
        };
        
            this.buckUpDBService.executeBackupAndScript(formData).subscribe(
              (response) => {
                this.toastr.success(response.message, 'Success');
                console.log('Cron expression:', response.cronExpression);
              },
              (error) => {
                this.toastr.error(error.error, 'Failed');
                console.error(error);
              }
            );*/             
    } 

}

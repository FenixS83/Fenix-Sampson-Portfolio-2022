import { Component, OnInit } from '@angular/core';
import { ICertificate } from './certificatesInterface';
import { CertificatesService } from '../certifications/certificates.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  pageTitle: string = 'Certifications';
  errorMessage= '';
  sub!: Subscription;
  
  
  
  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCertificates = this.performFilter(value);
  }
  
  filteredCertificates: ICertificate[] = [];
  certificate: ICertificate [] = [];







  constructor(private certificatesService: CertificatesService) { }

  performFilter(filterBy: string): ICertificate[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.certificate.filter((certificate: ICertificate) =>
      certificate.organization.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.certificatesService.getCertificates().subscribe({
      next: (certificate: ICertificate[]) => {
        this.certificate = certificate;
        this.filteredCertificates = this.certificate;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}

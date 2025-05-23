
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TraduccionService {
  constructor(private http: HttpClient) { }

  traducir(texto: string, desde: string, hacia: string): Observable<any> {
    const url = 'https://libretranslate.de/translate';
    const body = {
      q: texto,
      source: desde,
      target: hacia,
      format: 'text'
    };

    return this.http.post<any>(url, body);
  }
}

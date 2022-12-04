import { TestBed } from '@angular/core/testing';

import { ImdbService } from './imdb.service';

describe('ImdbService', () => {
  let service: ImdbService;
  let httpClient: any;

  beforeEach(() => {
    // TestBed.configureTestingModule({});

    httpClient = {
      get: jest.fn()
    }

    // service = TestBed.inject(ImdbService);
    service = new ImdbService(httpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve testar método getListaDeGenerosDeFilme', () => {
    const url = "https://imdb8.p.rapidapi.com/title/list-popular-genres";

    service.getListaDeGenerosDeFilme();
    expect(httpClient.get).toHaveBeenCalled();
    expect(httpClient.get).toBeCalledTimes(1);

    //descobrir como fazer esse teste com <headers> 
    //expect(httpClient.get).toHaveBeenCalledWith(url)


  })
});

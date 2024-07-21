import { RequestOptions, HeadersOptions } from './src/types/httpTypes'

async function httpTest(): Promise<void> {

  const url: string = 'https://yh-finance.p.rapidapi.com/stock/get-company-outlook?symbol=AMRN&region=US&lang=en-US';
  const options: RequestOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'Sign Up for Key',
      'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
    }
  };

  try {

    const httpObject: Response = await fetch(url, options);
    console.log(httpObject);

    // console.log("Aqui");
  } catch (error) {

    console.error(error);
  }
}

httpTest();
import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsListService {

  constructor(private httpClient: HttpClient) { }

  public isActiveEventEmitter: EventEmitter<boolean> = new EventEmitter();

  public isActive: boolean = null;

  newsList = [];

  // public articles: any = [];

  sourcesUrl = 'https://newsapi.org/v2/sources?apiKey=2b17f156630a4c0caf074c1251e75c02';

  public getSources(url: string): Observable<any> {
    return this.httpClient.get<any>(this.sourcesUrl).pipe(
      map((response) => {
        // console.log(response.sources);
        return response.sources;
      })
    );
  }

  public getSource(url: string): Observable<any> {
    // return this.httpClient.get<any>(url);
    return this.httpClient.get<any>(url).pipe(
      map((response) => {
        // console.log(response.articles);
        return response.articles;
      })
    );
  }

  updateID(id) {
    let sourceUrl = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=2b17f156630a4c0caf074c1251e75c02`;
    // console.log(sourceUrl);
    this.getSource(sourceUrl).subscribe((value => {this.newsList = value; }));
    // console.log(this.newsList);
  }


  // newsList = this.getSource(this.sourceUrl);

    /*newsList = [
    {
      id: 'bbc-news-00',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Russian flag flown on Salisbury Cathedral',
      description: 'The stunt has been called "disrespectful" and "stupid" in light of last year\'s Novichok poisoning.',
      url: 'http://www.bbc.co.uk/news/uk-england-wiltshire-47270827',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/2FB0/production/_105680221_flag.jpg',
      publishedAt: '2019-02-17T12:09:09Z',
      content: 'Image copyrightLee MartinImage caption\r\n The flag was fastened to scaffolding on the side of Salisbury Cathedral\r\nA Russian flag has appeared briefly on scaffolding outside Salisbury Cathedral.\r\nIt was spotted by workers early on Sunday but has since been rem… [+1427 chars]'
    },
    {
      id: 'bbc-news-01',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'IS teenager Shamima Begum \'gives birth\'',
      description: 'Her family say they have been told she and her child are in "good health".',
      url: 'http://www.bbc.co.uk/news/uk-47270857',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/F1EE/production/_105643916_begum_pa.jpg',
      publishedAt: '2019-02-17T11:35:20Z',
      content: 'Image copyrightPAImage caption\r\n Ms Begum was 15 and living in Bethnal Green, London, when she left the UK in 2015\r\nShamima Begum - the teenager who left the UK to join the Islamic State in Syria - has given birth, her family says they have been told.\r\nTheir … [+902 chars]'
    },
    {
      id: 'bbc-news-02',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Guaidó sets up Venezuela aid confrontation',
      description: 'The self-declared interim leader calls for a "humanitarian avalanche" on 23 February.',
      url: 'http://www.bbc.co.uk/news/world-latin-america-47269830',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/EF71/production/_105679216_mediaitem105679215.jpg',
      publishedAt: '2019-02-17T10:40:13Z',
      content: 'Image copyrightAFPImage caption\r\n Aid has been unloaded from US planes in Colombia and driven towards the Venezuela border\r\nVenezuela\'s self-declared interim leader has set up a confrontation over US aid by calling for Venezuelans to cross borders and bring i… [+3062 chars]'
    },
    {
      id: 'bbc-news-03',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Trump tells allies to take back IS fighters',
      description: 'The US president urges its European allies to repatriate 800 Islamic State fighters in Iraq and Syria.',
      url: 'http://www.bbc.co.uk/news/world-middle-east-47269887',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/C277/production/_105538794_052136092-1.jpg',
      publishedAt: '2019-02-17T09:08:47Z',
      content: 'Image copyrightGetty ImagesImage caption\r\n Donald Trump: "Put them on trial"\r\nPresident Trump has told the UK and other European allies to take back and put on trial more than 800 Islamic State (IS) group fighters captured in the final battle against the grou… [+2649 chars]'
    },
    {
      id: 'bbc-news-04',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Smollett \'paid Nigerians to attack him\'',
      description: 'The actor\'s lawyers deny the latest reports, which come after Chicago police released two men.',
      url: 'http://www.bbc.co.uk/news/world-us-canada-47269827',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/2C21/production/_105679211_mediaitem105679210.jpg',
      publishedAt: '2019-02-17T08:46:55Z',
      content: 'Image copyrightAFP\r\nChicago police believe Empire actor Jussie Smollett may have paid two men to carry out last month\'s alleged assault, reports in the US say. \r\nTwo Nigerian brothers who had worked as extras on Empire told police that they were paid to take … [+1688 chars]'
    },
    {
      id: 'bbc-news-05',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Emiliano Sala \'a step above the rest\'',
      description: 'On the day of footballer Emiliano Sala\'s funeral, his childhood friend and a former coach pay tribute.',
      url: 'http://www.bbc.co.uk/news/world-47269297',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/35DB/production/_105678731_p0713v0c.jpg',
      publishedAt: '2019-02-17T03:45:07Z',
      content: null
    },
    {
      id: 'bbc-news-06',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'PM urges Tory MPs to unite on Brexit',
      description: 'Theresa May tells Conservatives "history will judge us all" over the handling of Britain\'s EU exit.',
      url: 'http://www.bbc.co.uk/news/uk-politics-47268417',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/8A3B/production/_105678353_mediaitem105678352.jpg',
      publishedAt: '2019-02-17T01:59:20Z',
      content: 'Image copyrightPA\r\nTheresa May has urged Conservative MPs to put aside "personal preferences" and support a Brexit deal in the Commons.\r\nIn a letter to all 317 Tory members of Parliament, the prime minister said "history will judge us all" over the handling o… [+2348 chars]'
    },
    {
      id: 'bbc-news-07',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Nauert withdraws bid for UN envoy role',
      description: 'President Trump\'s pick to be America\'s new UN ambassador cites "family interests" for her decision.',
      url: 'http://www.bbc.co.uk/news/world-us-canada-47268967',
      urlToImage: 'https://ichef.bbci.co.uk/images/ic/1024x576/p06tzqm2.jpg',
      publishedAt: '2019-02-17T01:52:37Z',
      content: 'Media captionWho is Heather Nauert?\r\nUS President Donald Trump\'s pick to be America\'s new UN ambassador, Heather Nauert, has withdrawn her nomination for the post. \r\nMs Nauert, a former Fox News presenter, said in a statement on Saturday that the decision was… [+1164 chars]'
    },
    {
      id: 'bbc-news-08',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: 'Macron slams \'yellow vest\' anti-Semitism',
      description: 'A group of protesters in Paris directed insults and anti-Jewish taunts at a prominent philosopher.',
      url: 'http://www.bbc.co.uk/news/world-europe-47268651',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/08EF/production/_105678220_hi052378023.jpg',
      publishedAt: '2019-02-17T01:38:06Z',
      content: 'Image copyrightReutersImage caption\r\n Tens of thousands took part in anti-government protests on Saturday\r\nFrench President Emmanuel Macron has condemned anti-Semitic abuse directed at a prominent intellectual by a group of "yellow vest" protesters in Paris. … [+2266 chars]'
    },
    {
      id: 'bbc-news-09',
      source: {
        id: 'bbc-news',
        name: 'BBC News'
      },
      author: 'BBC News',
      title: '\'My brother, the Parkland gunman\'',
      description: '"The whole world is going to give him hate - why do I?" says Zachary Cruz of the Parkland shooting gunman.',
      url: 'http://www.bbc.co.uk/news/world-us-canada-47244128',
      urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/5BC8/production/_105669432_p0711jzx.jpg',
      publishedAt: '2019-02-17T00:28:45Z',
      content: null
    }
  ];*/

}

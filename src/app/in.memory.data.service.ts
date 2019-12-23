import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {

  createDb() {
    const googleSearch = [
      {
        id: 1,
        title: "Coffee - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Coffee",
        displayed_link: "https://en.wikipedia.org/wiki/Coffee",
        snippet: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa and ...",
        sitelinks: {
          inline: [
            {
              title: "History of coffee",
              link: "https://en.wikipedia.org/wiki/History_of_coffee"
            },
            {
              title: "Coffee bean",
              link: "https://en.wikipedia.org/wiki/Coffee_bean"
            },
            {
              title: "Coffee preparation",
              link: "https://en.wikipedia.org/wiki/Coffee_preparation"
            },
            {
              title: "Brewed coffee",
              link: "https://en.wikipedia.org/wiki/Brewed_coffee"
            }
          ]
        },
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:U6oJMnF-eeUJ:https://en.wikipedia.org/wiki/Coffee+&cd=4&hl=en&ct=clnk&gl=us",
        related_pages_link: "https://www.google.com/search?hl=en&gl=us&q=related:https://en.wikipedia.org/wiki/Coffee+Coffee&tbo=1&sa=X&ved=2ahUKEwjPi5uzxvDhAhXHu54KHXouArgQHzADegQIAhAF"
      },
      {
        id: 2,
        title: "Best Coffee Shops in Austin, Spring 2019 - Eater Austin",
        link: "https://austin.eater.com/maps/best-coffee-austin-cafes",
        displayed_link: "https://austin.eater.com/maps/best-coffee-austin-cafes",
        date: "Mar 25, 2019",
        snippet: "Simple espresso from Houndstooth Coffee, frothy lattes at Patika, expert brews from Wright Bros Brew & Brew, good ol' cups of black java from ..."
      },
      {
        id: 3,
        title: "Cuvée Coffee: Always Something Brewing. Austin, TX",
        link: "https://cuveecoffee.com/",
        displayed_link: "https://cuveecoffee.com/",
        snippet: "It began in 1998, when we started building our own direct trade network to ensure higher quality and more consistent access to our favorite coffee. More recently ...",
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:9KGxqO9Ef1wJ:https://cuveecoffee.com/+&cd=6&hl=en&ct=clnk&gl=us"
      },
      {
        id: 4,
        title: "Mozart's Coffee - Austin",
        link: "http://mozartscoffee.com/",
        displayed_link: "mozartscoffee.com/",
        snippet: "Our Story. Mozart's is proud to be an “Austin Original”. We opened our doors in 1993 with the dream of offering a place to enjoy quality coffee in a beautiful ...",
        cached_page_link: "http://webcache.googleusercontent.com/search?q=cache:iyGKHKgFvPwJ:mozartscoffee.com/+&cd=7&hl=en&ct=clnk&gl=us"
      },
      {
        id: 5,
        title: "Houndstooth Coffee",
        link: "https://www.houndstoothcoffee.com/",
        displayed_link: "https://www.houndstoothcoffee.com/",
        snippet: "Houndstooth Coffee serves only the finest coffee, tea, beer, wine and pastries. Local and national suppliers source sustainable products from the finest estates, ...",
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:LUlkIm1_AS4J:https://www.houndstoothcoffee.com/+&cd=8&hl=en&ct=clnk&gl=us"
      },
      {
        id: 6,
        title: "Jo's Coffee - Austin",
        link: "https://www.joscoffee.com/",
        displayed_link: "https://www.joscoffee.com/",
        snippet: "Jo's Coffee. Locations South Congress Downtown Campus; Events Calendar Chili Cook-Off Pet Parade South X San José · Culture; Jobs English + Spanish ...",
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:AUwsMkw3aIEJ:https://www.joscoffee.com/+&cd=9&hl=en&ct=clnk&gl=us"
      },
      {
        id: 7,
        title: "Flat Track Coffee",
        link: "https://flattrackcoffee.com/",
        displayed_link: "https://flattrackcoffee.com/",
        snippet: "2019, Flat Track Coffee. Powered by Shopify. american express; apple pay; diners club; discover; jcb; master; paypal; shopify pay; venmo; visa. Liquid error: ...",
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:94kCFheFCboJ:https://flattrackcoffee.com/+&cd=10&hl=en&ct=clnk&gl=us",
        related_pages_link: "https://www.google.com/search?hl=en&gl=us&q=related:https://flattrackcoffee.com/+Coffee&tbo=1&sa=X&ved=2ahUKEwjPi5uzxvDhAhXHu54KHXouArgQHzAJegQIBxAF"
      },
      {
        id: 8,
        title: "The Coffee House « Austin Improv Comedy Shows, Classes – The ...",
        link: "http://www.hideouttheatre.com/coffeehouse",
        displayed_link: "www.hideouttheatre.com/coffeehouse",
        snippet: "The Hideout is downtown Austin's oldest independent coffee house. We are open morning to night, weekdays and weekends and serve beer, wine, fresh ...",
        cached_page_link: "http://webcache.googleusercontent.com/search?q=cache:VD32HaeikQMJ:www.hideouttheatre.com/coffeehouse+&cd=11&hl=en&ct=clnk&gl=us",
        related_pages_link: "https://www.google.com/search?hl=en&gl=us&q=related:www.hideouttheatre.com/coffeehouse+Coffee&tbo=1&sa=X&ved=2ahUKEwjPi5uzxvDhAhXHu54KHXouArgQHzAKegQICRAF",
        rich_snippet: {
          bottom: {
            extensions: [
              "Sat, Apr 27",
              "Silly Love Songs"
            ]
          }
        }
      },
      {
        id: 9,
        title: "Bennu 24 Hour Coffee Lounge :: Austin, Texas",
        link: "http://www.bennucoffee.com/",
        displayed_link: "www.bennucoffee.com/",
        snippet: "Bennu Coffee is an independently owned 24-hour coffee shop with locations in east and central Austin. We offer high-quality, fair-trade coffee, locally sourced ...",
        cached_page_link: "http://webcache.googleusercontent.com/search?q=cache:o0gwPv9kcZIJ:www.bennucoffee.com/+&cd=12&hl=en&ct=clnk&gl=us",
        related_pages_link: "https://www.google.com/search?hl=en&gl=us&q=related:www.bennucoffee.com/+Coffee&tbo=1&sa=X&ved=2ahUKEwjPi5uzxvDhAhXHu54KHXouArgQHzALegQIBBAF"
      },
      {
        id: 10,
        title: "Radio Coffee & Beer - Austin",
        link: "https://www.radiocoffeeandbeer.com/",
        displayed_link: "https://www.radiocoffeeandbeer.com/",
        snippet: "Radio Coffee and Beer is located at 4204 Manchaca Rd, Austin, TX 78704. Open every day until midnight, RCB proudly serves delicious coffee and beer and is ...",
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:p8rv2zO3XscJ:https://www.radiocoffeeandbeer.com/+&cd=13&hl=en&ct=clnk&gl=us"
      },
      {
        id: 11,
        title: "Tea - Wikipedia",
        link: "https://en.wikipedia.org/wiki/Tea",
        displayed_link: "https://en.wikipedia.org/wiki/Tea",
        snippet: "Tea is a brewed drink prepared from roasted Tea beans, the seeds of berries from certain Coffea species. The genus Coffea is native to tropical Africa and ...",
        sitelinks: {
          inline: [
            {
              title: "History of Tea",
              link: "https://en.wikipedia.org/wiki/History_of_Tea"
            },
            {
              title: "Tea bean",
              link: "https://en.wikipedia.org/wiki/Tea_bean"
            },
            {
              title: "Tea preparation",
              link: "https://en.wikipedia.org/wiki/Tea_preparation"
            },
            {
              title: "Brewed Tea",
              link: "https://en.wikipedia.org/wiki/Brewed_Tea"
            }
          ]
        },
        cached_page_link: "https://webcache.googleusercontent.com/search?q=cache:U6oJMnF-eeUJ:https://en.wikipedia.org/wiki/Tea+&cd=4&hl=en&ct=clnk&gl=us",
        related_pages_link: "https://www.google.com/search?hl=en&gl=us&q=related:https://en.wikipedia.org/wiki/Tea+Tea&tbo=1&sa=X&ved=2ahUKEwjPi5uzxvDhAhXHu54KHXouArgQHzADegQIAhAF"
      }
    ];

    return {googleSearch};
  }
}

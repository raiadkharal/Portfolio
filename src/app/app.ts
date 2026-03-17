import { Component, signal, AfterViewInit, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Experience, Projects, Skills, Education, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, delay);
          delay += 150; // Stagger effect
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, observerOptions);

    const elements = this.el.nativeElement.querySelectorAll('.reveal');
    elements.forEach((el: Element) => observer.observe(el));
  }
}

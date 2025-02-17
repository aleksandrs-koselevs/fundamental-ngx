import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import * as basicInfiniteTs from '!raw-loader!./examples/infinite-scroll-basic-example/infinite-scroll-basic-example.component.ts';
import * as basicInfiniteHtml from '!raw-loader!./examples/infinite-scroll-basic-example/infinite-scroll-basic-example.component.html';
import { ExampleFile } from '../../core-helpers/code-example/example-file';
import { DocsSectionTitleComponent } from '../../core-helpers/docs-section-title/docs-section-title.component';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'infinite-scroll-docs',
    templateUrl: './infinite-scroll-docs.component.html'
})
export class InfiniteScrollDocsComponent implements OnInit {
    basicInfiniteExample: ExampleFile[] = [
        {
            language: 'html',
            code: basicInfiniteHtml
        },
        {
            language: 'typescript',
            code: basicInfiniteTs
        }
    ];



    ngOnInit() {}
}

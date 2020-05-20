import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { BlogTestModule } from '../../../test.module';
import { PostDetailComponent } from 'app/entities/post/post-detail.component';
import { Post } from 'app/shared/model/post.model';

describe('Component Tests', () => {
  describe('Post Management Detail Component', () => {
    let comp: PostDetailComponent;
    let fixture: ComponentFixture<PostDetailComponent>;
    const route = ({ data: of({ post: new Post(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [BlogTestModule],
        declarations: [PostDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(PostDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PostDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load post on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.post).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
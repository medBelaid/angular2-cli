/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PuzzleComponent } from './puzzle.component';

describe('Component: Puzzle', () => {
  it('should create an instance', () => {
    let component = new PuzzleComponent();
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

type CartesianPlane = {
  gridColor: string;
  shapes: Array<Ellipse|Rect|Polygon>
} | null;

type Ellipse = {
  type: 'ellipse';
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  fill: string;
  stroke: string;
}

type Rect = {
  type: 'rect';
  x: number;
  y: number;
  height: number;
  width: number;
  fill: string;
  stroke: string;
}

type Polygon = {
  type: 'polygon';
  points: string;
  fill: string;
  stroke: string;
}

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  
  cartesianPlane = new FormGroup({
    gridColor: new FormControl(),
    shapes: new FormArray<FormGroup>([])
  });

  data: CartesianPlane = null;

  constructor() {
    this.getShapesArray.push(this.createRectForm());
  }

  ngOnInit(): void {
  }

  get getShapesArray() : FormArray {
    return this.cartesianPlane.get('shapes') as FormArray;
  }

  get getShapesForms() : FormGroup[] {
    return this.getShapesArray.controls as FormGroup[];
  }

  getShapeType(index: number) : string {
    return this.getShapesForms[index].controls['type'].value;
  }

  handleChangeShapeType(event: any, index: number) : void {
    switch(event.target.value) {
      case 'ellipse':
        this.getShapesArray.setControl(index, this.createEllipseForm());
        break;
      case 'rect':
        this.getShapesArray.setControl(index, this.createRectForm());
        break;
      case 'polygon':
        this.getShapesArray.setControl(index, this.createPolygonForm())
        break;
    }
  }

  addShape() {
    this.getShapesArray.controls.push(this.createRectForm());
  }

  removeShape(index: number): void {
    this.getShapesArray.removeAt(index);
  }

  createEllipseForm(): FormGroup {
    return new FormGroup({
      type: new FormControl('ellipse', [Validators.required]),
      cx: new FormControl('', [Validators.required]),
      cy: new FormControl('', [Validators.required]),
      rx: new FormControl('', [Validators.required]),
      ry: new FormControl('', [Validators.required]),
      fill: new FormControl('', [Validators.required]),
      stroke: new FormControl('', [Validators.required])
    });
  }

  createRectForm(): FormGroup {
    return new FormGroup({
      type: new FormControl('rect', [Validators.required]),
      x: new FormControl('', [Validators.required]),
      y: new FormControl('', [Validators.required]),
      height: new FormControl('', [Validators.required]),
      width: new FormControl('', [Validators.required]),
      fill: new FormControl('', [Validators.required]),
      stroke: new FormControl('', [Validators.required])
    });
  }

  createPolygonForm(): FormGroup {
    return new FormGroup({
      type: new FormControl('polygon', [Validators.required]),
      points: new FormControl('', [Validators.required]),
      fill: new FormControl('', [Validators.required]),
      stroke: new FormControl('', [Validators.required])
    });
  }

  convertSvgXToPlane(x: number): number {
    return x * 10;
  }

  convertSvgYToPlane(y: number): number {
    return 100 - (y * 10);
  }

  convertSvgAbsoluteToPlane(y: number): number {
    return y * 10;
  }

  handleSubmitShapes(): void {
    this.data = this.cartesianPlane.value as CartesianPlane;
    console.log(this.data)
  }

  stringPointsToPlane(points: string): string {
    return points.split(' ').map(pair => {
      let x = this.convertSvgXToPlane(Number(pair.split(',')[0]));
      let y = this.convertSvgYToPlane(Number(pair.split(',')[1]));
      return [x,y].join(',');
    }).join(' ');
  }

}

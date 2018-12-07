import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "arrayFilter",
  pure: false
})
export class ArrayFilter implements PipeTransform {
  transform(items: any[], filterVal: any, arrType: string): any {
    //console.log("filterVal : " + filterVal);
    if (!items) {
      //console.log("no items");
      return items;
    }

    if (!filterVal) {
      console.log("no filterValue");
      return items;
    }
    // console.log(' here items : ');
    // console.log('filterVal : '+filterVal);
    // console.log(items);
    return items.filter(item => this.applyFilter(item, filterVal, arrType));
  }

  applyFilter(item, filterVal, arrType: string): any {
    switch (arrType) {
      case "answer_types":
        return item.id.indexOf(filterVal) !== -1;
      case "products":
        return item.id.indexOf(filterVal) !== -1;
      case "evotes":
        return item.id.indexOf(filterVal) !== -1;
      case "clients":
        return item.id.indexOf(filterVal) !== -1;
      default:
        break;
    }
  }
}

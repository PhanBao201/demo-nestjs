import { Injectable } from "@nestjs/common";
import { Cats } from "src/interfaces/cats.interface";

@Injectable()
export class CatsService {
    private readonly cats: Cats[] = [];

    create (cat: Cats) {
        this.cats.push(cat);
    }
}
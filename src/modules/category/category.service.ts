import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
    findByUserId(userid: string) {
        throw new Error('Method not implemented.');
    }
    create(body: Category) {
        throw new Error('Method not implemented.');
    }
    constructor(@InjectRepository(Category) private repo: Repository<Category>) {}

    findAll() {
        return this.repo.find();
    }
}

import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private productRepository: Model<Product>,
  ) {}

  public create(createProductDto: CreateProductDto) {
    const createProduct = new this.productRepository(createProductDto);
    return createProduct.save();
  }

  findAll() {
    return this.productRepository.find().exec();
  }

  findOne(id: string) {
    return this.productRepository.findById(id).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productRepository.findByIdAndDelete(id);
  }
}

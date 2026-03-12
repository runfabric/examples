import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("hello")
  getHello() {
    return {
      framework: "nestjs",
      message: "hello from nestjs example"
    };
  }

  @Post("echo")
  echo(@Body() body: unknown) {
    return {
      framework: "nestjs",
      body: body ?? null
    };
  }
}

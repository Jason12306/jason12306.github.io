[@Data注解 与 lombok](https://www.jianshu.com/p/c1ee7e4247bf)
@Data 注解的主要作用是提高代码的简洁，使用这个注解可以省去代码中大量的get()、 set()、 toString()等方法；
[@JsonProperty](https://blog.csdn.net/liliang_11676/article/details/80210065)
@JsonProperty 此注解用于属性上，作用是把该属性的名称序列化为另外一个名称，如把trueName属性序列化为name，`@JsonProperty("name")`。
[`@RestController注解`](https://www.cnblogs.com/east7/p/10462279.html)
@RestController的作用等同于@Controller + @ResponseBody，RestController和@Controller的共同点是都用来表示Spring某个类是否可以接收HTTP请求，二者区别： @RestController无法返回指定页面，而@Controller可以。前者可以直接返回数据，后者需要@ResponseBody辅助。

[@RequestParam](https://blog.csdn.net/sswqzx/article/details/84195043)
将请求参数绑定到你控制器的方法参数上（是springmvc中接收普通参数的注解）


[@Valid](https://www.cnblogs.com/acm-bingzi/p/spring_valid.html)
可以实现数据的验证，你可以定义实体，在实体的属性上添加校验规则，注意2.3.x以上需要单独引入 http://www.mydlq.club/article/49/

[@ControllerAdvice](https://www.cnblogs.com/yanggb/p/10859907.html)
@ControllerAdvice注解是Spring3.2中新增的注解，学名是Controller增强器，作用是给Controller控制器添加统一的操作或处理。对于@ControllerAdvice，我们比较熟知的用法是结合@ExceptionHandler用于全局异常的处理，但其作用不止于此。



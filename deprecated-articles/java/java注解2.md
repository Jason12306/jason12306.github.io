[@Component](https://juejin.cn/post/6844904034596290568)
作用：用于把当前类对象存入spring容器中 属性：value用于指定bean的id。当我们不写时，它的默认值是当前类名，且首字母改小写。

[@Aspect](https://blog.csdn.net/qcl108/article/details/105026692/)
常见用于记录日志, 异常集中处理, 权限验证以及 Web参数有效验证等等
..两个点表明多个, *代表一个
其中权限修饰符是可选, 当不写时不能用*代替, 因此第一个*代表返回类型不限
第二个*表示指定包下所有类
第三个*表示指定类下所有方法
(..)两个点表示指定方法的参数不限

[@Bean](https://www.cnblogs.com/yanggb/p/14897327.html)
@bean注解是被设计使用在方法上的，在方法上使用@bean注解的时候，该方法就会被告知去产生一个bean对象，然后这个bean对象交给spring管理

[@CacheEvict](https://jingyan.baidu.com/article/ceb9fb1081d46c8cad2ba039.html)
缓存
[@ConfigurationProperties](https://www.cnblogs.com/jimoer/p/11374229.html)
在 Spring Boot 项目中，为满足以上要求，我们将大量的参数配置在 `application.properties` 或 `application.yml` 文件中，通过 `@ConfigurationProperties` 注解，我们可以方便的获取这些参数值
[@Configuration](https://blog.csdn.net/weixin_42353390/article/details/102816728)
 用来代替 xml文件进行配置和初始化Bean类；
 内部含有一个或者多个被@Bean注解配置的生成Bean的方法；
[@Primary](https://www.cnblogs.com/jyy599/p/12410571.html)
在spring 中使用注解，常使用@Autowired， 默认是根据类型Type来自动注入的。但有些特殊情况，对同一个接口，可能会有几种不同的实现类，而默认只会采取其中一种的情况下 @Primary 的作用就出来了
[@MapperScan](https://blog.csdn.net/nba_linshuhao/article/details/82783454)
指定要变成实现类的接口所在的包，然后包下面的所有接口在编译之后都会生成相应的实现类
[@Repository注解的作用](https://blog.csdn.net/wqh0830/article/details/96109587)
把对象交给spring管理，@Repository用在持久层的接口上，这个注解是将接口的一个实现类交给spring管理。
`@Component`
相当于定义了一个`Bean`，它有一个可选的名称，默认是小写开头的类名，在容器运行期间，我们调用getBean(Class)获取到的Bean总是同一个实例。

[注入List](https://www.liaoxuefeng.com/wiki/1252599548343744/1308043627200545)
```
 @Autowired
 List<Validator> validators;
```
Spring会自动把所有类型为Validator的Bean装配为一个List注入进来，这样一来，我们每新增一个Validator类型，就自动被Spring装配到Validators中了，非常方便。

`@Order `
Spring是通过扫描classpath获取到所有的Bean，而List是有序的，要指定List中Bean的顺序，可以加上@Order注解。

`@Scope`
使用`@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)`，每次调用getBean(Class)，容器都返回一个新的实例，这种Bean称为Prototype（原型）

`@Autowired`
指定类型的`Bean`注入到指定的字段中。可选注入，`Spring` 如果没有找到对应类型的 `Bean`，它会抛出 `NoSuchBeanDefinitionException` 异常。可以给 `@Autowired` 增加一个 `required = false` 的参数。

`@Configuration`
表示它是一个配置类

`@ComponentScan`
告诉容器，自动搜索当前类所在的包以及子包，把所有标注为`@Component`的Bean自动创建出来，并根据 `@Autowired` 进行装配。

`@PostConstruct`
初始化

`@PreDestroy`
销毁

`@PropertySource`
自动读取配置文件，只需要在@Configuration配置类上再添加一个注解，如：`@PropertySource("app.properties")`  表示读取`classpath`的`app.properties`

`@Value("${app.zone:Z}")`
表示读取`key`为`app.zone`的`value`，但如果`key`不存在，就使用默认值`Z`

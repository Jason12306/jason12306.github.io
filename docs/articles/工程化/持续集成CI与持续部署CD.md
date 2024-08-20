# 持续集成 CI 与持续部署 CD

> CI/CD（持续集成/持续部署）自动化部署流程是一个多阶段的过程，旨在通过自动化工具和方法，从代码提交到最终部署到生产环境的整个过程中实现持续的集成、测试和部署。这个过程通常包括以下几个关键步骤：

## 持续集成（Continuous Integration, CI）：

- 代码提交：开发人员将代码提交到版本控制系统（如 ‌Git）。
- 自动构建：CI 服务器自动拉取最新代码，进行编译和构建。
- 自动化测试：运行单元测试和集成测试，确保代码质量。
- 持续反馈：将测试结果反馈给开发人员，及时发现并修复问题。

## 持续交付（Continuous Delivery, CD）：

- 代码审查：通过自动化工具进行代码质量检查，如静态代码分析。
- 环境模拟：在模拟的生产环境中进行功能测试，确保应用在实际环境中表现良好。
- 部署准备：准备部署所需的配置和依赖，确保部署顺利进行。

## 持续部署（Continuous Deployment, CD）：

- 自动部署：一旦通过所有测试，自动将应用部署到生产环境。
- 监控与回滚：部署后进行监控，确保应用正常运行。如果出现问题，可以快速回滚到之前稳定的状态。

## 工具与技术栈：

- 版本控制：Git 用于管理代码版本。
- CI/CD 服务器：‌Jenkins、‌GitLab CI/CD、‌GitHub Actions 等用于自动化构建、测试和部署。
- 自动化工具：‌Ansible、‌Puppet、Chef 等用于配置管理和自动化部署。
- 监控工具：Prometheus、Grafana 等用于实时监控应用性能和稳定性。

## 最佳实践：

- 小步快跑：通过频繁的集成和部署，减少大规模集成时的风险。
- 自动化测试：确保每次代码变更都能通过自动化测试，减少人工干预。
- 持续反馈：及时将测试结果和部署状态反馈给开发人员，加快问题修复速度。
  通过上述流程和技术栈，可以实现高效的 CI/CD 自动化部署，加速应用开发、测试和上线过程，提高软件交付的质量和效率

## 以 github 为例

> GitHub Actions GitHub 推出的持续集成服务，GitHub 把抓取代码/测试/登录远程服务器/发布/部署项目等操作称之为 actions。

### 关于 GITHUB_TOKEN

在每个工作流作业开始时，GitHub 会自动创建唯一的 GITHUB_TOKEN 机密以在工作流中使用。 可以使用 GITHUB_TOKEN 在工作流作业中进行身份验证。**令牌的权限仅限于包含您的工作流程的仓库**。

- [参考](https://docs.github.com/zh/actions/security-for-github-actions/security-guides/automatic-token-authentication#about-the-github_token-secret)

### 参考资料

- [GitHub Actions 的工作流语法](https://docs.github.com/zh/actions/writing-workflows/workflow-syntax-for-github-actions)

- [github 文档](https://docs.github.com/zh)

- [【前端 github actions CI/CD 实战】通过 github actions 自动化部署 web 项目](https://juejin.cn/post/7028882363606106148)
- [使用 Github Actions 来实现项目的 CI/CD](https://juejin.cn/post/7003278731171069982)

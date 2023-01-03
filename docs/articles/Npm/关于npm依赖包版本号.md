# 关于npm依赖包版本号

npm包版本号语法：X.Y.Z（主版本号.次版本号.修订号）  

## 关于 ~ 符号
> Allows patch-level changes if a minor version is specified on the comparator. Allows minor-level changes if not.

 - ~1.2.3 := >=1.2.3 <1.(2+1).0 := >=1.2.3 <1.3.0-0
 - ~1.2 := >=1.2.0 <1.(2+1).0 := >=1.2.0 <1.3.0-0 (Same as 1.2.x)
 - ~1 := >=1.0.0 <(1+1).0.0 := >=1.0.0 <2.0.0-0 (Same as 1.x)
 - ~0.2.3 := >=0.2.3 <0.(2+1).0 := >=0.2.3 <0.3.0-0
 - ~0.2 := >=0.2.0 <0.(2+1).0 := >=0.2.0 <0.3.0-0 (Same as 0.2.x)
 - ~0 := >=0.0.0 <(0+1).0.0 := >=0.0.0 <1.0.0-0 (Same as 0.x)
 - ~1.2.3-beta.2 := >=1.2.3-beta.2 <1.3.0-0 Note that prereleases in the 1.2.3 version will be allowed, if they are greater than or equal to beta.2. So, 1.2.3-beta.4 would be allowed, but 1.2.4-beta.2 would not, because it is a prerelease of a different [major, minor, patch] tuple.

## 关于 ^ 符号
> Caret ranges are ideal when an author may make breaking changes between 0.2.4 and 0.3.0 releases, which is a common practice. However, it presumes that there will not be breaking changes between 0.2.4 and 0.2.5. It allows for changes that are presumed to be additive (but non-breaking), according to commonly observed practices.

- ^1.2.3 := >=1.2.3 <2.0.0-0
- ^0.2.3 := >=0.2.3 <0.3.0-0
- ^0.0.3 := >=0.0.3 <0.0.4-0
- ^1.2.3-beta.2 := >=1.2.3-beta.2 <2.0.0-0 Note that prereleases in the 1.2.3 version will be allowed, if they are greater than or equal to beta.2. So, 1.2.3-beta.4 would be allowed, but 1.2.4-beta.2 would not, because it is a prerelease of a different [major, minor, patch] tuple.
- ^0.0.3-beta := >=0.0.3-beta <0.0.4-0 Note that prereleases in the 0.0.3 version only will be allowed, if they are greater than or equal to beta. So, 0.0.3-pr.2 would be allowed.

[参考文档](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)

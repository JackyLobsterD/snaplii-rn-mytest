# React Native Directory

Your can search libraries related react-native on this site

https://reactnative.directory/

# run on a real Android device

1. open Android developer options and set use debugging true
2. connect to your computer with line
3. run adb command to map the port between computer and Android device
    ```
    adb reverse tcp:8081 tcp:8081
    ```
    or
    yarn adb
    ```
4. cd to the repo root and run server by command below
    ```
    yarn start
    ```
    or
    ```
    npm run start
    ```
    > If it is your first time to run repo, you may set the node environment.
    > Then install dependencies by command
    > ```
    > yarn
    > ```
    > or
    > ```
    > npm i
    > ```

# run on Web

```
yarn web
```
or
```
npm run web
```

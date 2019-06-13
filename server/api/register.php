<?php
    # 获取提交的参数
$mobile = $_REQUEST["mobile"];
$password = $_REQUEST["password"];
$filePath = "../register.json";

    # 读取文件的内容
$content = fread(fopen($filePath, "r"), filesize($filePath));
    // var_dump($content);

$data = json_decode($content, true);
    // var_dump($data);
    # 根据数据来修改文件的内容
for ($i = 0; $i < count($data); $i++) {
        // echo $data[$i]["id"];
        // echo $id;
    if ($data[$i]["mobile"] == $mobile) {

        echo "账号已经注册";
    } else {
        echo "账号注册成功";
    }
}

    # 把数据更新到JSON文件中
fwrite(fopen($filePath, "w"), json_encode($data, true));
    #fclose($filePath);
?>
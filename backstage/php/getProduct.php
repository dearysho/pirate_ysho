<?php
try {
    require_once("php/connectPirates.php");
    $sql = "select * from customlist where forCust=0;";
    $product=$pdo->query($sql);

    if ($product->rowCount() == 0) {
        echo "沒有商品!!!";
    } else {
        $prods = $product->fetchAll(PDO::FETCH_ASSOC);
        
        foreach ($prods as $i=>$prodRow) {
            ?>	
            <tbody>
            <tr>
            <td class="merchNo"><?php echo $prodRow["modelId"]; ?></td>
            <td class="merchName"><input type="text" name="merchName" value='<?php echo $prodRow["modelName"]; ?>' placeholder="請輸入造型名稱"></td>
            <td class="merchPart">
              <select name="cusYN">
                  <option value="1"
                   <?php
                    if ($prodRow["modelPart"]==1) {
                        echo "selected";
                    } ?> 
                  >船頭</option>
                  <option value="2"
                  <?php
                    if ($prodRow["modelPart"]==2) {
                        echo "selected";
                    }; ?> 
                  >船身</option>
                  <option value="3"
                  <?php
                    if ($prodRow["modelPart"]==3) {
                        echo "selected";
                    }; ?> 
                  >船帆</option>
              </select>
            </td>
            <?php
            ?>
            <td><?php echo $prodRow["modelImg"]; ?></td>
            <td>
                <select name="cusYN">
                    <option value="cusY"
                        <?php
                            if ($prodRow["forCust"]==0) {
                                echo "selected";
                            }; ?> 
                    >客製化造型</option>
                    <option value="cusN"
                        <?php
                            if ($prodRow["forCust"]==1) {
                                echo "selected";
                            }; ?> 
                    >商城造型</option>
                </select>
            </td>
            <td><input type="text" name="oMPrice" class="merchPrice" value="<?php echo $prodRow["price"]; ?>"></td>
            <td>
            <select class="saleYN" name="saleYN">
                <option value="onSale"
                    <?php
                        if ($prodRow["modelStatus"]==1) {
                            echo "selected";
                        }; ?> 
                >上架中</option>
                <option value="offSale"
                    <?php
                        if ($prodRow["modelStatus"]==0) {
                            echo "selected";
                        }; ?> 
                >已下架</option>
            </select>
            </td>
            <td>
            <button class="updateList" style="display:none">修改</button>
            <button class="addToList removeIt">刪除</button>
            </td>
            <?php
            ?>
            </tr>
            </tbody>
            </form>
          <?php
        }
    }
} catch (PDOException $e) {
    echo "error";
}
?>
#Answer
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isValidBST(TreeNode root) {
        return isBST(root,Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
    public boolean isBST(TreeNode root,int min,int max)
    {
        if(root==null)
            return true;
        if(root.val<min || root.val>max)
                return false;
        return (isBST(root.left,min,root.val-1) && isBST(root.right,root.val+1,max));
    }
}

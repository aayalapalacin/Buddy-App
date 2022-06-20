"""empty message

Revision ID: d0aa4032f92c
Revises: 0a69395ee69d
Create Date: 2022-06-05 22:04:54.440537

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd0aa4032f92c'
down_revision = '0a69395ee69d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('goal_user_id_fkey', 'goal', type_='foreignkey')
    op.drop_column('goal', 'user_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('goal', sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('goal_user_id_fkey', 'goal', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###